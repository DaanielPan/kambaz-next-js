import Link from "next/link";
export default function Labs() {
  console.log('Hello World!');
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2>Daniel Pan</h2>
      <a href="https://github.com/DaanielPan/kambaz-next-js" id="wd-github">
        My GitHub Repository
      </a>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab4" id="wd-lab3-link">
            Lab 4: Redux
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab5" id="wd-lab3-link">
            Lab 5: Node
          </Link>
        </li>
      </ul>
    </div>
  );
}