import crypto from 'node:crypto';

interface AuthorizationProps {
  userId: string;
  profileId: string; 
  createdAt: Date;
}

export class Authorization {
  private _id: string;
  private props: AuthorizationProps;

  get id(): string {
    return this._id;
  }

  get userId(): string {
    return this.props.userId;
  }

  get profileId(): string {
    return this.props.profileId;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  constructor(props: AuthorizationProps, id?: string) {
    this._id = id ?? crypto.randomUUID();
    this.props = props;
  }
}