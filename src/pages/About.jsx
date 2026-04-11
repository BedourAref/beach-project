import Card from "../components/Card";

function About() {
  return (
    <section>
      <h1 className="display-6 fw-bold mb-4">About</h1>
      <div className="row g-3">
        <div className="col-12 col-lg-6">
          <Card
            title="Scalable Structure"
            text="This project separates pages, layout, reusable UI components, hooks, and API services for long-term maintainability."
          />
        </div>
        <div className="col-12 col-lg-6">
          <Card
            title="Modern Stack"
            text="Built with React functional components, hooks, React Router, Bootstrap 5, and Axios."
          />
        </div>
      </div>
    </section>
  );
}

export default About;
