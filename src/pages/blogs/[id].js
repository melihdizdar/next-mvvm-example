import { useRouter } from "next/router";

const BlogDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>Blog Details for ID: {id}</div>
    );
};

export default BlogDetailPage;