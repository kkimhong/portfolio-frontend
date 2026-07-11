import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RiArrowUpDownLine } from "@remixicon/react";

export default function BlogsPage() {
  const blogCards = [
    {
      id: 1,
      title: "Blog",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      totalBlogs: 10,
    },
    {
      id: 2,
      title: "Blog Post 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      totalBlogs: 15,
    },
    {
      id: 3,
      title: "Blog Post 3",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      totalBlogs: 15,
    },
  ];
  return (
    <section>
      <div className="flex flex-3 justify-between items-center mb-4 space-x-4">
        {blogCards.map((blog) => (
          <Card key={blog.id} className="w-full">
            <CardHeader>
              <CardTitle>{blog.title}</CardTitle>
              <CardDescription>{blog.description}</CardDescription>

              <CardAction>
                <RiArrowUpDownLine />
              </CardAction>
            </CardHeader>

            <CardContent>
              <p>{blog.content}</p>
            </CardContent>

            <CardFooter>
              <p>Total Blogs: {blog.totalBlogs}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div>
        hello
      </div>
    </section>
  );
}