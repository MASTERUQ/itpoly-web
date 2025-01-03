import React from "react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">เกี่ยวกับเรา</h1>
          <p className="lead">
            วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่  
            สาขาเทคโนโลยีสารสนเทศ - สร้างอนาคตด้วยนวัตกรรมที่ไม่มีสิ้นสุด
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">ภารกิจของเรา</h2>
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://www.khaosod.co.th/wpapp/uploads/2024/06/IMG_4567.jpeg"
                alt="About Us"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <p className="text-justify">
                สาขาเทคโนโลยีสารสนเทศมุ่งเน้นการพัฒนาและสร้างบัณฑิตที่มีความรู้ความสามารถ 
                เพื่อรองรับการเปลี่ยนแปลงของโลกเทคโนโลยีที่ไม่มีวันหยุดนิ่ง
                เราพร้อมที่จะผลักดันนักศึกษาให้กลายเป็นผู้สร้างสรรค์แห่งยุคใหม่
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-warning py-5">
        <div className="container">
          <h2 className="text-center mb-4">ประวัติความเป็นมา</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                วิทยาลัยก่อตั้งขึ้นในปี พ.ศ. 2538 ด้วยความมุ่งมั่นที่จะสร้างสรรค์เทคโนโลยีที่ทันสมัย  
                และช่วยยกระดับชุมชนผ่านการพัฒนานวัตกรรม โดยมุ่งเน้นที่คุณภาพการศึกษา  
                และการผลิตบัณฑิตที่พร้อมตอบสนองความต้องการของตลาดแรงงาน
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.lannapoly.ac.th/poly_alumni/img/2565.jpg"
                alt="History"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center mb-4">วิสัยทัศน์ของเรา</h2>
          <div
            id="visionCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://i.ytimg.com/vi/OyLcgnQRg5k/maxresdefault.jpg"
                  className="d-block w-100"
                  alt="Vision 1"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>วิสัยทัศน์ที่ 1</h5>
                  <p>เรามุ่งมั่นที่จะเป็นผู้นำด้านเทคโนโลยีสารสนเทศ ที่สร้างสรรค์นวัตกรรมเพื่อพัฒนาสังคม</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.cmthainews.com/wp-content/uploads/2022/05/S__16703590.jpg"
                  className="d-block w-100"
                  alt="Vision 2"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>วิสัยทัศน์ที่ 2</h5>
                  <p>เราจะส่งเสริมการเรียนรู้และพัฒนาทักษะการทำงานที่สามารถนำไปใช้ในชีวิตจริงได้</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://mpics.mgronline.com/pics/Images/566000005762504.JPEG"
                  className="d-block w-100"
                  alt="Vision 3"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>วิสัยทัศน์ที่ 3</h5>
                  <p>เรามุ่งเน้นการสร้างบัณฑิตที่มีทักษะสูงและพร้อมที่จะรับมือกับการเปลี่ยนแปลงของโลกในยุคดิจิทัล</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#visionCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#visionCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-5 bg-success text-white">
        <div className="container text-center">
          <h2 className="mb-4">พร้อมที่จะก้าวไปกับเรา?</h2>
          <p>
            สมัครเรียนวันนี้ หรือเข้าร่วมกิจกรรมของเราเพื่อสัมผัสประสบการณ์การเรียนรู้ที่แตกต่าง!
          </p>
          <a href="/apply" className="btn btn-light btn-lg mt-3">
            สมัครเรียน
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
