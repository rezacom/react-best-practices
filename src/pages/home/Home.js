import { useEffect, useState } from "react";
import Layout from "../../components/common/layout/Layout";

import { postsService } from "../../api/postsService";

import "./style.css";

export default function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    // fetch Data Posts
    const fetchData = async () => {
        try {
            const resPosts = await postsService()
            setPosts(resPosts.data);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Layout pageTitle="Home Page">
            <div className="home-page">
                <br />
                <h3>posts</h3>
                <div className="home-page__posts">
                    {
                        !loading ? (
                            posts.map(item => (
                                <div className="home-page__post" key={item.id}>
                                    <h3>{item.title}</h3>
                                    <p>{item.body}</p>
                                </div>
                            ))

                        ) : <div>Loading</div>
                    }
                </div>
            </div>
        </Layout>
    )
}
