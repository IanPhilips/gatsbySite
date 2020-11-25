import React from 'react';
import {  graphql } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from 'mdbreact';
import { navigate } from '../../.cache/gatsby-browser-entry';
import bg from '../assets/img/recyc.jpeg';


const BlogListPage = ({data}) => {
  const { allMarkdownRemark } = data;
  console.log("all markdown data:", allMarkdownRemark);
  return (
    <Layout>
      <Header/>
      <section className="blog" style={{paddingTop:"90px"}}>
        <div style={{ position:"relative"}}>
          {/*background image*/}
          <img  className={'video'} src={bg} alt={''} style={{ height: '40vh', width: '100vw', objectFit: 'cover' }}/>
          {/*title div*/}
          <div  style={{ position:"absolute", top:0, background: "rgba(0,0,0,.3)", height:"40vh", width:"100vw", objectFit:"cover" }}>
            <div className="header-content text-white mx-auto" style={{ left:"50vh", marginTop:"17vh", }}>
              <h1 className={"text-center m-5"}> The Blog </h1>
            </div>
          </div>
        </div>
      <div className={"container-fluid"}>

        <div className={"row"}>
        {allMarkdownRemark.edges.map((node, i) => {
          const blog = node.node.frontmatter;
          return (
            <div className={"col-4"}>
            <MDBCard className={"mt-4 thumbnail-card"} key={i}>
              <div onClick={()=>{navigate("/"+blog.slug)}} style={{cursor:"pointer"}}>
                {/*image*/}
                <div className={"thumbnail-parent"}>
                  <img alt={blog.title} className={'thumbnail-image'} src={blog.photo}/>
                  <div className={"thumbnail-overlay"}/>
                  {/*title + meta*/}
                  <div className={"thumbnail-title m-3 "}>
                    <h3 className={""} >{blog.title} </h3>
                    <h6 className={""} >{blog.date}</h6>
                  </div>
                </div>
              </div>
            </MDBCard>
            </div>
          )
        })}
        </div>
      </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
          html
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
              photo
              
            }
          }
        }
      }
    }
  `

export default BlogListPage
