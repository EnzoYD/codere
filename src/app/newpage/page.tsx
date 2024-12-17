import Link from "next/link";

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>New Page</h1>
        <p>
          This page is added to test git pushing to multiple code collaboration
          platforms.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi
          nec enim ullamcorper scelerisque non et tellus. Cras ut vel
          felis posuere luctus. blandit ligula orci, eu mollis erat
          feugiat id. Suspendisse, leo eget tincidunt varius, turpis
          mauris ullamcorper lacus, tincidunt massa massa quis quam. in consequat lorem. Aliquam erat volutpat. Ut nec est in magna conturex
          congue cursus. Nunc varius risus a congue.
        </p>
        <p>
          Praesent elementum eros vitae tellus interdum, eget varius sem
          viverra. Morbi imperdiet vestibulum libero in vestibulum. Vestibulum
          vitae lorem vel nibh dapibus consectetur. Maecenas finibus vel justo
          vulputate accumsan. Nulla dapibus mi sed velit blandit posuere. Sed
          ullamcorper. Sed sit amet enim lectus. Praesent fermentum massa sed
          mattis dapibus. Mauris ultricies, nibh vitae scelerisque suscipit, mi
          nisi finibus lorem, sed fermentum ipsum massa pretium lorem. Nullam
          elementum semper arcu, ac porttitor sapien aliquam vel. Duis vel mi
          lectus. Vivamus quis eleifend tortor, at sollicitudin eros.
          Suspendisse mollis arcu et velit eleifend, porttitor hendrerit nunc
          pretium. Sed mollis velit nisi, in ultricies erat ultricies ut.
          Aliquam ullamcorper, lacus consequat sollicitudin vehicula, quam
          turpis laoreet leo, vitae fermentum nunc felis non dui. Nulla nisi
          est, pulvinar eget tellus a, posuere tempor odio.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/"
            rel="noopener noreferrer"
          >
            ← Go back
          </Link>
        </div>
        <p>Some disclaimer text.</p>
      </main>
    </div>
  );
}
