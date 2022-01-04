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
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{children}</div>
    </div>
  );
}
