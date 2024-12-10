import { useRouter } from "next/router";

const BlogDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>Blog Details for ID: {id}</div>
    );
};

export default BlogDetail;