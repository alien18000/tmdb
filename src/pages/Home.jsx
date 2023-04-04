import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useFetchData from "../hooks/useFetchData";
import { MediaCard, PageLayout } from "../components";
import Spinner from "../utils/Spinner";

export default function Home() {
  const { error, data, setPage, newData } = useFetchData("trending/movie/week");
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore);

  function fetchMore() {
    setTimeout(() => {
      setPage((prev) => prev + 1);
      setIsFetching(false);
    }, 3000);
  }

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <PageLayout heading="Trending movies" error={error}>
      <Row className="gy-2">
        {[...newData,...data].map((movie) => (
          <Col xs={6} md={3} xl={2} key={movie.id}>
            <MediaCard {...movie} />
          </Col>
        ))}
      </Row>

      {isFetching && <Spinner />}
    </PageLayout>
  );
}
