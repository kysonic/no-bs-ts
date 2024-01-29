type Visitor<T extends { next: string }> = (data: T) => void;

class VisitAllPages<T extends { next: string }> {
  constructor(private baseUrl: string) {}

  async visit(visitor: Visitor<T>) {
    let nextUrl = this.baseUrl;

    do {
      const response = await fetch(nextUrl);
      const json = (await response.json()) as T;
      visitor(json);
      nextUrl = json.next;
    } while (nextUrl);
  }
}
