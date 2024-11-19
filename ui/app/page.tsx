'use client';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import GradientBG from '../components/GradientBG.js';
import styles from '../styles/Home.module.css';
import './reactCOIServiceWorker';
import ZkappWorkerClient from './zkappWorkerClient';


export default function Home() {
  const [zkappWorkerClient, setZkappWorkerClient] = useState<null | ZkappWorkerClient>(null);
  const [hasBeenSetup, setHasBeenSetup] = useState(false);

  useEffect(() => {
    const setup = async () => {
      try {
        if (!hasBeenSetup) {
          console.log('Loading web worker...')
          const zkappWorkerClient = new ZkappWorkerClient();
          setZkappWorkerClient(zkappWorkerClient);
          await new Promise((resolve) => setTimeout(resolve, 5000));
          console.log('Done loading web worker')
      
          console.log('Loading zkProgram...');
          await zkappWorkerClient.loadNonRecursiveProgram();
          console.log('zkProgram loaded');

          console.log('Compiling zkProgram...');
          await zkappWorkerClient.compileNonRecursiveProgram();
          console.log('zkProgram compiled');
          
        }
      } catch (error: any) {
        console.log(`Error during setup: ${error.message}`);
      }
    };

    setup();
  }, []);


  return (
    <>
      <Head>
        <title>Mina zkProgram Compilation Issue</title>
        <meta name="description" content="built with o1js" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <GradientBG>
        <main className={styles.main}>
          <div className={styles.center}>
          <h1 className={styles.start}>
            To be compiled, or not to be compiled, that is the question.
            </h1>
          </div>
          <p className={styles.start}>
            Check out DevTools console
          </p>
        </main>
      </GradientBG>
    </>
  );
}
