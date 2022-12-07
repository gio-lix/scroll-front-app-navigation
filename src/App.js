import './css/App.css';
import {useEffect, useRef, useState} from "react";
import Card from "./components/Card";

const carts = [
    {
        id: 1,
        title: "Mollie Andersson",
        image: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 2,
        title: "rebecca Andersson",
        image: "https://cdn.pixabay.com/photo/2017/12/12/05/01/portrait-3013924__480.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown a type specimen book."
    },
    {
        id: 3,
        title: "hanna Andersson",
        image: "https://cdn.pixabay.com/photo/2015/09/22/21/35/woman-952506__480.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tooey of type and scrambled it to make a type specimen book."
    },
    {
        id: 4,
        title: "kate Andersson",
        image: "https://cdn.pixabay.com/photo/2015/01/07/20/53/hat-591973__480.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer torambled it to make a type specimen book."
    },
    {
        id: 5,
        title: "mia Andersson",
        image: "https://cdn.pixabay.com/photo/2018/06/13/20/07/child-3473596__480.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled."
    },
]

function App() {
    const navRef = useRef()
    const [focus, setFocus] = useState("")
    const [activeClass, setActiveClass] = useState("")

    const scrollToSection = (element) => {
        [...navRef.current?.children].forEach((ele) => {
            if (ele.id === element) {
                window.scrollTo({
                    top: ele.offsetTop,
                    behavior: "smooth"
                })
            }
        })
    }

    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setFocus(`focus-${entry.target.id}`)
            setActiveClass(entry.target.id)
        }

    }, {
        threshold: 0.6
    })
    useEffect(() => {
        [...navRef.current?.children].forEach(el => {
            observer.observe(el)
        })
    }, [navRef.current])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        setFocus("focus-services")
    },[])

    return (
        <main className="App">
            <div className="main-box" ref={navRef}>
                <section id="services" className={`services ${activeClass === "services" && "active"}`}>
                    <div className="services-img-box">
                        <img src="https://cdn.pixabay.com/photo/2022/11/24/02/28/clouds-7613361_1280.png" alt="image"/>
                    </div>
                    <article className={`services-param ${activeClass === "services" && "param-active"}`}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto commodi molestiae
                            quod recusandae sed totam? Adipisci consequatur explicabo nam unde voluptatibus. Aliquid
                            dicta dolore dolorem eos, est expedita illo in labore libero, molestias nobis officiis
                            provident repellendus sapiente sequi tenetur velit, voluptas! Asperiores dolor ea et
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, repudiandae.</p>
                    </article>
                </section>
                <section id="blog" className={`blog  ${activeClass === "blog" && "active"}`}>
                    <div className={`blog-container ${activeClass === "blog" && "blog-para"}`}>
                        <p>
                            <span>Title</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi distinctio ea et
                            facilis. Ad aliquam animi, assumenda consequatur deleniti dolorem doloremque dolores
                            doloribus eum eveniet ex illo impedit inventore labore laboriosam magnam molestiae numquam
                        </p>
                        <div className="blog-box">
                            <img src="https://cdn.pixabay.com/photo/2022/10/31/12/40/sorrow-7559727__480.jpg"
                                 alt="img"/>
                        </div>
                    </div>
                </section>
                <section id="content" className={`content ${activeClass === "content" && "active"}`}>
                    <div className={`content-box ${activeClass === "content" && "rotate-image"}`}>
                        <img src="https://cdn.pixabay.com/photo/2022/10/31/12/40/sorrow-7559727__480.jpg" alt="img"/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, nisi.</p>
                </section>
                <section id="users" className={`users ${activeClass === "users" && "active"}`}>
                    <div className="services-users-box">
                        {carts?.map((items, index) => (
                            <Card
                                key={index}
                                title={items.title}
                                content={items.content}
                                image={items.image}
                            />
                        ))}
                    </div>
                </section>
            </div>
            <div className="navigation">
                <nav className="nav">
                    <ul className={`${focus}`}>
                        <li onClick={() => scrollToSection("services")} className="link ">Services</li>
                        <li onClick={() => scrollToSection("blog")} className="link ">Blog</li>
                        <li onClick={() => scrollToSection("content")} className="link ">Content</li>
                        <li onClick={() => scrollToSection("users")} className="link ">Users</li>
                    </ul>
                </nav>
            </div>
        </main>
    );
}

export default App;

