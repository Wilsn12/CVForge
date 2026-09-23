import { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/api/cvs";

function MyCVs({ onEdit }) {
  const [cvs, setCvs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch CVs");
        }

        return response.json();
      })
      .then((data) => {
        setCvs(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this CV?"
  );

  if (!confirmed) {
    return;
  }

  try {
    setDeleting(true);

    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error("Failed to delete CV");
    }

    setCvs((current) =>
      current.filter((cv) => cv.id !== id)
    );
  } catch (error) {
    console.error(error);
    alert("Failed to delete CV");
  } finally {
    setDeleting(false);
  }
  };

  return (
    <section className="my-cvs-section" id="my-cvs">
      <div className="section-heading">
        <span className="section-label">MY CVs</span>

        <h2>
          Your saved <span>CVs.</span>
        </h2>

        <p>
          View and manage the CVs you have created.
        </p>
      </div>

      {loading ? (
        <div className="my-cvs-empty">
          Loading your CVs...
        </div>
      ) : cvs.length === 0 ? (
        <div className="my-cvs-empty">
          <h3>No CVs yet</h3>
          <p>Create and save your first CV to see it here.</p>
        </div>
      ) : (
        <div className="my-cvs-grid">
          {cvs.map((cv) => (
            <div className="saved-cv-card" key={cv.id}>
              <div className="saved-cv-icon">
                CV
              </div>

              <div className="saved-cv-content">
                <h3>{cv.name || "Untitled CV"}</h3>

                <p>
                  {cv.professionalTitle || "Professional CV"}
                </p>

                <span>
                  {cv.template === "modern"
                    ? "Modern Creative"
                    : "ATS Professional"}
                </span>
              </div>

              <div className="saved-cv-actions">
                <button
                  type="button"
                  onClick={() => onEdit(cv)}
                >
                  Edit CV
                </button>

                <button 
                type="button"
                onClick={() => handleDelete(cv.id)}
                >
                  {deleting ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MyCVs;