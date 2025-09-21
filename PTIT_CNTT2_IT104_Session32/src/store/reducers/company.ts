export type CompanyState = { name: string };

const initialState: CompanyState = { name: "Rikkei Academy" };

type Action = { type: "CHANGE_COMPANY" };

export function companyReducer(
  state: CompanyState = initialState,
  action: Action
): CompanyState {
  switch (action.type) {
    case "CHANGE_COMPANY":
      return { name: "RikkeiSoft" };
    default:
      return state;
  }
}
