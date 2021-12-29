import Head from "next/head";

export default function Layout({ children }) {
  const pageTitle = children[0]?.props.children;

  return (
    <div>
      <Head>
        <title>Dwalesska Coaching | {pageTitle}</title>
        <meta
          name="description"
          content="Dania Walesska Holistic Wellness Coaching"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{children}</div>
    </div>
  );
}
