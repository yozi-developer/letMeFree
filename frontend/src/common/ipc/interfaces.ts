export interface IVkTokenMessage {
  action: string;
}

const ACTION_UPDATED = "updated";
export interface IVkTokenUpdated extends IVkTokenMessage {
  action: typeof ACTION_UPDATED;
  token: string;
}
export function isVkTokenUpdated(
  message: IVkTokenMessage
): message is IVkTokenUpdated {
  return message.action === ACTION_UPDATED;
}

const ACTION_ERROR = "error";
export interface IVkTokenError extends IVkTokenMessage {
  action: typeof ACTION_ERROR;
  reason: string;
}
export function isVkTokenError(
  message: IVkTokenMessage
): message is IVkTokenError {
  return message.action === ACTION_ERROR;
}
