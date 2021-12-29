import Image from "next/image";

export default function Images() {
  return (
    <div>
      <div>
        <Image
          src="/images/aboutMain.webp" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="aboutMain"
        />
      </div>
      <div>
        <Image
          src="/images/dania_main.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="dania_main"
        />
      </div>
      <div>
        <Image
          src="/images/dania_mainMobile.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="dania_mainMobile"
        />
      </div>
      <div>
        <Image
          src="/images/dania_walesska_logo.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="dania_walesska_logo"
        />
      </div>
      <div>
        <Image
          src="/images/tempSubscribeBackground.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="tempSubscribeBackground"
        />
      </div>
    </div>
  );
}
