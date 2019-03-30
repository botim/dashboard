import { FACEBOOK_URL, TWITTER_TWEET_URL } from '../core';

export enum Platform {
  TWITTER = 'TWITTER',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

export enum Reason {
  BOT = 'BOT',
  VIOLENCE = 'VIOLENCE',
  FAKE = 'FAKE'
}

export enum Status {
  REPORTED = 'REPORTED',
  IN_PROCESS = 'IN_PROCESS',
  BOT = 'BOT',
  NOT_BOT = 'NOT_BOT',
  DUPLICATE = 'DUPLICATE'
}

export class UserStatus {
  id: number;
  platform: Platform;
  userId: string;
  username?: string;
  postId: string;
  commentId?: string;
  replyCommentId?: string;
  reasons: Reason[];
  status: Status;
  description?: string;
  // reporterKey: string;
  private _reportedAt: string;

  get reportedAt(): string {
    return this._reportedAt;
  }

  set reportedAt(reportedAt: string) {
    const [, year, month, day, hour, minute] = reportedAt.match(
      /([\d]+)-([\d]+)-([\d]+)T([\d]+):([\d]+)/
    );

    this._reportedAt = `${day}-${month}-${year} ${hour}:${minute}`;
  }

  get postUrl(): string {
    if (this.platform === Platform.FACEBOOK) {
      return `${FACEBOOK_URL}/${this.postId}`;
    }

    if (this.platform === Platform.TWITTER) {
      return `${TWITTER_TWEET_URL}/${this.postId}`;
    }
  }

  get commentUrl(): string {
    if (this.platform === Platform.FACEBOOK) {
      return `${FACEBOOK_URL}/${this.commentId}`;
    }
  }

  get replyCommentUrl(): string {
    if (this.platform === Platform.FACEBOOK) {
      return `${FACEBOOK_URL}/${this.replyCommentId}`;
    }
  }

  constructor(userStatus: Partial<UserStatus>) {
    Object.assign(this, userStatus);
  }
}
