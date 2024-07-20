import PocketBase from 'pocketbase';

export class PocketBaseClient {
  private static instance: PocketBaseClient;
  public pb: PocketBase;

  private constructor() {
    this.pb = new PocketBase('http://127.0.0.1:8090/');
    this.pb.autoCancellation(false);
  }

  public static getInstance(): PocketBaseClient {
    if (!this.instance) {
      this.instance = new PocketBaseClient();
    }
    return this.instance;
  }
}

export const client = PocketBaseClient.getInstance();
