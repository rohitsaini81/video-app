import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {


  return (
    <>
      <section className="pt-20 h-full bg-[#F3F4F6]">
        <div className="flex card">
        {props.Data.map((e,index)=>(
          <SingleCard
          key = {index}
          image={e.link}
          CardTitle={e.title}
          titleHref="/#"
          btnHref={`/details/${e._id}`}
          CardDescription={e.decripiton}
          Button="View Preview"
        />
       

        ))}  
        
        </div>
      </section>
    </>
  );
};

export default Card;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      {/*  */}
      <div className="ml boxsize">
        <img src={image} alt=""/>
        <div className="p-8">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-5"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb">
            {CardDescription}
          </p>

          {Button && (
            <Link
              to={btnHref}
              className="mt btn btn-primary" 
            >
              
              {Button}
            </Link>
          )}
        </div>
      </div>
    
    </>
  );
};
