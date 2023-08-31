export interface State {
  auth: { user: any; token: string };
}
export interface ErrorType {
  message: string;
  status?: number;
  // Other properties
}
