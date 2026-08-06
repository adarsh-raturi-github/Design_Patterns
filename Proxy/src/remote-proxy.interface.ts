export interface RemoteProxyInterface {
  report(): {
    location: string;
    count: number;
    state: string;
  };
}
