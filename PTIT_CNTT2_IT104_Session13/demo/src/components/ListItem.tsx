import { Component } from 'react'

interface PropsType {
    content: string
    id?: number
    children?: React.ReactNode
}

export default class ListItem extends Component<PropsType> {
    static defaultProps = {
        id: 1
    }
    constructor(props: PropsType) {
        super(props)
    }

    render() {
        return (
            <>
                {this.props.children}
                <div>{this.props.id}. {this.props.content}</div>
            </>
        )
    }
}
