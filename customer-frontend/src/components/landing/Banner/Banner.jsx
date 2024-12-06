import Link from "next/link";

export const Banner = () => {
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className="main-block load-bg">
        <div className="wrapper">
          <div className="main-block__content">
            {/* <span className='saint-text'>Professional</span> */}
            <h1 className="main-text">Jast Delightful Cakes</h1>
            <p>
              Welcome to our bakery, founded by Jaini and Stuti, where every bite is a delightful experience crafted with love and passion.
              We take the best ingredients and ideas to create a sweet
              masterpiece you’ll remember for years to come.
            </p>

            {/*<Link href="/shop">*/}
            {/*  <a className="btn">Order now</a>*/}
            {/*</Link>*/}
          </div>
        </div>
        <img
          className="main-block__decor"
          src="/assets/img/main-block-decor.png"
          alt=""
        />
      </div>
      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};
