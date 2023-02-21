import React from "react";
import ProfileBubble from "../profile-bubble/ProfileBubble";

const UpdateBox = () => {
  // const { id, title, content } = update;
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <p className="card-title col-6">
                <ProfileBubble name={"Eliana Henderson"} />
              </p>
              <p className="card-text p-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt, nisl nec ultricies lacinia, nunc nisl aliquam nisl,
                ut aliquet nunc nisl eu nunc. Sed tincidunt, nisl nec ultricies
                lacinia, nunc nisl aliquam nisl, ut aliquet nunc nisl eu nunc.
              </p>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <button className="btn col-6">Like</button>
                <button className="btn col-6">Reply</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateBox;
