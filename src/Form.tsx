import * as React from "react";

interface IProps {
  text: string;
  age?: number;
}

interface IState {
  email: string;
  name: string;
}
export default class Form extends React.Component<IProps, IState> {
  public state: IState = {
    email: "",
    name: ""
  };
  public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value }: any = e.target;
    this.setState({
      name: value
    });
  };
  public render() {
    const { text } = this.props;
    const { name, email } = this.state;
    return (
      <div>
        <div>{text}</div>
        <div>{email}</div>
        <input name="name" value={name} onChange={e => this.handleChange(e)} />
      </div>
    );
  }
}
