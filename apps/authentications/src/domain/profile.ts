import crypto from 'node:crypto';

interface ProfileProps {
  name: string;
}

export class Profile {
  private _id: string;
  private props: ProfileProps;

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }

  constructor(props: ProfileProps, id?: string) {
    this._id = id ?? crypto.randomUUID();
    this.props = props;
  }
}