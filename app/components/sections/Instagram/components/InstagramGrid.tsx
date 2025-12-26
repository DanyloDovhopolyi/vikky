import { useStaggeredReveal } from "@/app/hooks/useScrollReveal";
import { InstagramGridWrapper } from "../styles";
import { InstagramPost } from "./InstagramPost";

type InstagramPostData = {
  id: number;
  image: string;
  link: string;
  position: string;
  alt: string;
};

type InstagramGridProps = {
  posts: InstagramPostData[];
};

export function InstagramGrid({ posts }: InstagramGridProps) {
  const { containerRef, visibleItems } = useStaggeredReveal(posts.length, 100);

  return (
    <InstagramGridWrapper ref={containerRef}>
      {posts.map((post, index) => (
        <InstagramPost
          key={post.id}
          image={post.image}
          link={post.link}
          alt={post.alt}
          position={post.position}
          isVisible={visibleItems[index]}
          index={index}
        />
      ))}
    </InstagramGridWrapper>
  );
}
