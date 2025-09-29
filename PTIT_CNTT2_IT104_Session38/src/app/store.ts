import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import type { Book } from "../components/types";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const res = await axios.get<Book[]>("http://localhost:8080/books");
  return res.data.map((b) => ({ ...b, id: String(b.id) }));
});

export const addBook = createAsyncThunk(
  "books/addBook",
  async (payload: {
    title: string;
    author: string;
    year: number;
    category: string;
  }) => {
    const res = await axios.post("http://localhost:8080/books", payload);
    const created = res.data;
    return { ...created, id: String(created.id) };
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (id: string) => {
    await axios.delete(`http://localhost:8080/books/${id}`);
    return id;
  }
);

interface BooksState {
  items: Book[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: BooksState = { items: [], status: "idle" };

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (b) => {
    b.addCase(fetchBooks.pending, (s) => {
      s.status = "loading";
    })
      .addCase(fetchBooks.fulfilled, (s, a) => {
        s.status = "succeeded";
        s.items = a.payload;
      })
      .addCase(fetchBooks.rejected, (s) => {
        s.status = "failed";
      })
      .addCase(addBook.fulfilled, (s, a) => {
        s.items.push(a.payload);
      })
      .addCase(deleteBook.fulfilled, (s, a) => {
        s.items = s.items.filter((b) => b.id !== a.payload);
      });
  },
});

export const { setBooks } = booksSlice.actions;

export const store = configureStore({
  reducer: { books: booksSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
