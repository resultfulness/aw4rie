"use client";

import LinkButton from "./components/LinkButton";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className='split'>
        <div className='left'>
          <h1>
            Get newest alerts
            <br />
            and local info
          </h1>
          <p className='subtitle'>Interested? Get started now!</p>
          <LinkButton href='/app'>Show newest alerts</LinkButton>
        </div>
        <div className='right'>
          <img src='https://unsplash.it/800/600' alt='hero' />
        </div>
      </div>

      <style jsx>{`
        main {
          margin-block: 4em;
        }

        .split {
          display: flex;
          gap: 2rem;
        }

        .split > * {
          flex-basis: 100%;
        }

        .left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
        }

        h1 {
          font-size: 3rem;
        }

        .subtitle {
          font-size: 1.5rem;
        }
      `}</style>
    </main>
  );
}
