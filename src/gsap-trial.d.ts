declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];

    constructor(
      target: string | Element,
      vars?: {
        type?: string;
        charsClass?: string;
        wordsClass?: string;
        linesClass?: string;
      }
    );

    revert(): void;
  }
}