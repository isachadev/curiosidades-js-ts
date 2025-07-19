type ColorType<T> = T | null;

class Led<T> {
  private color: ColorType<T> = null;
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  /**
   *
   * @returns color actual
   */
  getCurrentColor(): ColorType<T> {
    return this.color;
  }

  /**
   *
   * @param color
   * @returns vacío
   */
  setColor(color: ColorType<T>): void {
    this.color = color;
  }
}

export default Led;
