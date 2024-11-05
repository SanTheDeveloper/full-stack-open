export default function Total({ course }) {
  const totalExercises = course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );

  return <p>Number of exercises {totalExercises}</p>;
}
