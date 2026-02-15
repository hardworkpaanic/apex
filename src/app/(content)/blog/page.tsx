import { Title } from "@/page/blog/widgets";
import { ArticleCard, Footer } from "@/shared/components";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/components/ui/pagination";

export default function BlogPage() {
  return (
    <>
      <main className="container max-w-[1320px] mx-auto px-4">
        <Title />

        <section className="mt-10 hidden md:flex gap-5 flex-row">
          <div className="w-full">
            <ArticleCard className="h-[550px]!" />
          </div>

          <div className="w-full flex flex-col gap-2">
            <ArticleCard row />
            <ArticleCard row />

            <ArticleCard row />
          </div>
        </section>
        <section className="flex mt-15 hidden md:flex  justify-center flex-row gap-5">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </section>

        <section className="mt-15 flex md:hidden flex-col gap-5">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </section>

        {/* TODO: Добавить погинацию */}

        <div className="mt-30 flex w-full items-center justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem className="rounded-full">
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="rounded-full" href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="rounded-full" href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="rounded-full" href="#">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="rounded-full" href="#">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="rounded-full" href="#">
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="rounded-full" href="#">
                  6
                </PaginationLink>
              </PaginationItem>

              <PaginationItem className="rounded-full">
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
      <Footer />
    </>
  );
}
