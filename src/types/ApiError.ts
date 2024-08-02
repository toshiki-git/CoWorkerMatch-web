export class CustomApiError extends Error {
  status: number;
  statusText: string;

  constructor(message: string, status: number, statusText: string) {
    super(message);
    this.status = status;
    this.statusText = statusText;
    this.name = 'CustomApiError';
  }
}
