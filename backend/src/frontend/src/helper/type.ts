export interface AuthValueType {
    email: string;
    password: string;
    confirmPwd?: string;
  };
  
  export interface ErrorType {
    email?: string,
    password?: string,
    confirmPwd?: string
  
  }