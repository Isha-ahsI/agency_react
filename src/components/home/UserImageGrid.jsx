import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Data from "../../data/data.json"
const UserImageGrid = () => {
  let index = 0;
  const renderGroupedImages = (users) => {
    return users.map((user, i) => {
      const currentIndex = index++;
      return (
        <div key={currentIndex} className="img-wrapper position-relative overflow-hidden mb-3">
          <div className="overlay"></div>
          <button
            className="view-user"
            data-index={currentIndex}
            data-bs-toggle="modal"
            data-bs-target="#personinfoModal"
          >
            <i className="ri-eye-fill fs-1 text-light"></i>
          </button>
          <Image src={user.src} alt={`user-${currentIndex}`} className="img-fluid" />
        </div>
      );
    });
  };
  return (
    <Row className="g-3">
      {Data.userImageData.map((section, idx) => (
        <Col key={idx} className={section.col}>
          <div className="d-flex justify-content-around gap-3 user-img-wrapper mt-4">
            {/* Split into 3 columns within each Col */}
            {(() => {
              const col1 = renderGroupedImages(section.users.slice(0, 2));
              const col2 = renderGroupedImages(section.users.slice(2, 4));
              const col3 = renderGroupedImages(section.users.slice(4));
              return (
                <>
                  <div className="d-flex flex-column align-self-end mt-5">{col1}</div>
                  <div className="d-flex flex-column align-self-start">{col2}</div>
                  <div className="align-self-center">{col3}</div>
                </>
              );
            })()}
          </div>
        </Col>
      ))}
    </Row>
  );
};
export default UserImageGrid;