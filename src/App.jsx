function App() {
  return (
    <>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row bg-light w-100">
            <div className="col text-center">
              <h1>Learn Web Development</h1>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col m-5 d-flex gap-3">
              <button className="btn btn-warning">HTML</button>
              <button className="btn btn-primary">CSS</button>
              <button className="btn btn-primary">Javascript</button>
              <button className="btn btn-primary">NodeJs</button>
              <button className="btn btn-primary">Express</button>
              <button className="btn btn-primary">React</button>
            </div>
            <div className="row ">
              <div className="col m-5 d-flex gap-3">
                <div className="card w-100">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card’s content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
