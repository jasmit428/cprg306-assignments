import Link from "next/link";

const StudentInfo = () => {
  return (
    <div>
      <h2>Jasmit Kaur</h2>
      <p>
        GitHub Repository:{" "}
        <Link href="https://github.com/jasmit428/week2" target="_blank">
          Click here to view my repo
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
