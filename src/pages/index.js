import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="VanillaDream">
      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>VanillaDream</h1>
            <p className={styles.subtitle}>
              Ванильный сервер нового поколения
            </p>

            <div className={styles.buttons}>
              <a className={styles.playButton} href="/docs/start">
                Начать играть
              </a>
              <a
                className={styles.discordButton}
                href="https://discord.gg/HfTZqxJARX"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </div>
          </div>
        </section>

        {/* VANILLA MODE */}
        <section className={styles.vanilla}>
          <div className={styles.vanillaCard}>
            <h2>🌍 Vanilla</h2>

            <p className={styles.vanillaDesc}>
              Чистое выживание без донатных преимуществ.  
              Только скилл, экономика и честная игра.
            </p>

            <div className={styles.vanillaStats}>
              <div>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Аптайм</span>
              </div>
              <div>
                <span className={styles.statNumber}>1.21+</span>
                <span className={styles.statLabel}>Версия</span>
              </div>
              <div>
                <span className={styles.statNumber}>No Pay2Win</span>
                <span className={styles.statLabel}>Баланс</span>
              </div>
            </div>

            <div
              className={styles.ipBox}
              onClick={() => {
                navigator.clipboard.writeText("95.217.100.59:25802");
                alert("IP скопирован: 95.217.100.59:25802");
              }}
            >
              IP: <span>95.217.100.59:25802</span>
              <small className={styles.copyHint}>
                Нажмите чтобы скопировать
              </small>
            </div>

            <a className={styles.joinButton} href="#">
              Подключиться к серверу
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
