import PaginationControls from "@/components/PaginationControls";

export default function ProfilePage({ userData, totalPages, currentPage }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <ul className="mb-6">
        {userData.map((post) => (
          <li key={post.id} className="p-4 border rounded mb-2">
            {post.title}
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <PaginationControls
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const page = parseInt(query.page) || 1;
  const limit = 5;

  // Fetch paginated data from your API or database
  const res = await fetch(
    `${process.env.BASE_URL}/api/posts?page=${page}&limit=${limit}`
  );
  const { data, totalPages } = await res.json();

  return {
    props: {
      userData: data,
      totalPages,
      currentPage: page,
    },
  };
}
