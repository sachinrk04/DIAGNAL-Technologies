import React, { useEffect, Suspense } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import * as actions from "./actions/index";
import Loading from "./components/Loading";

const ListingPage = React.lazy(() => import("./pages/ListingPage"));

function App(props) {
  useEffect(() => {
    props.onFetchContents();
  }, []);

  const contents = Object.keys(props.content).length
    ? props.content["content-items"]
    : [];

  return (
    <>
      <Header />
      <div className="mt-14">
        {contents.length ? (
          <Suspense fallback={<Loading />}>
            <ListingPage datas={contents} />
          </Suspense>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    content: state.content.content,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchContents: () => dispatch(actions.getContent()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
