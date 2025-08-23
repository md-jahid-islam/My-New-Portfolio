import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

 // ======= Re-usable small UI pieces ======= //
 const Badge = ({ children }) => (
  <span className="inline-block text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
  {children}
  </span>
 );

 {/*children*/}
 const Label = ({ children }) => (
  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">{children}</label>
 );

 {/*Input props*/}
 const Input = (props) => (
  <input
    {...props}
    className={
      "w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 " +
      (props.className || "")
    }
    />
 );

 {/*Textarea props*/}
 const Textarea = (props) => (
  <textarea
    {...props}
    className={
      "w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] " +
      (props.className || "")
    }
    />
 );

 // =========== Button props ========== // 
 const Button = ({ children, className = "", ...rest }) => (
  <button
    {...rest} 
    className={`px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 disabled:opacity-60 ${className}`}>
    {children}
  </button>
 );

 // ============= Blog post creation form ========== //
 const BlogComponents = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  // ======= create form states (design-only, in-memory) ======== //
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [newCategory, setNewCategory] = useState("Front End");
  const [imageFiles, setImageFiles] = useState([]); 
  const [videoFiles, setVideoFiles] = useState([]); 

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  // ========== Demo + user-created posts (stored in component state) ========= //
  const [posts, setPosts] = useState(() => [
    {
      id: crypto.randomUUID(),
      date: "20 April 2026",
      category: "Front End",
      title: "Become a Frontend Developer in 5 Steps",
      excerpt:
        "Learn HTML, CSS, and JavaScript basics. Then move into frameworks like React or Vue for building modern apps.",
      images: ["/images/website.png"],
      videos: [],
    },
    {
      id: crypto.randomUUID(),
      date: "15 August 2028",
      category: "Web Design",
      title: "Become a Web Designer in 5 Steps",
      excerpt:
        "Learn design principles, tools like Figma & Adobe XD, and practice by creating real-world UI/UX projects.",
      images: ["/images/mobail.png"],
      videos: [],
    },
    {
      id: crypto.randomUUID(),
      date: "20 July 2029",
      category: "Development",
      title: "Master Web Development in 5 Steps",
      excerpt:
        "Understand the fundamentals, then move to backend tech like Node.js, databases, and APIs.",
      images: ["/images/website1.png"],
      videos: [],
    },
    {
      id: crypto.randomUUID(),
      date: "20 July 2029",
      category: "Node.js",
      title: "Become a Node.js Developer in 5 Steps",
      excerpt:
        "Start with JavaScript basics, learn Node.js core, Express, databases, authentication and deploy.",
      images: ["/images/website2.png"],
      videos: [],
    },
  ]);

  //  =========== Build categories list dynamically from posts ========= //
  const categories = useMemo(() => [
    "all",
    ...Array.from(new Set(posts.map((p) => p.category.toLowerCase()))),
  ], [posts]);

  //  =========== Filter logic (case-insensitive) ========== //
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const inCategory = category === "all" || p.category.toLowerCase() === category;
      if (!inCategory) return false;
      if (!q) return true;
      const haystack = `${p.title} ${p.excerpt} ${p.date} ${p.category}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [posts, query, category]);

  //  ======== Helpers for media preview (Object URLs for design-only) ======== //
  const fileListToObjectUrls = (files) => files.map((f) => URL.createObjectURL(f));

  // ======== Remove selected (pre-publish) media items ======== //
  const removePreImage = (i) => setImageFiles((arr) => arr.filter((_, idx) => idx !== i));
  const removePreVideo = (i) => setVideoFiles((arr) => arr.filter((_, idx) => idx !== i));

  //  ========= Create a new post (design-only, no backend) ========= //
  const handleCreate = (e) => {
    e.preventDefault();
    if (!title.trim() && !content.trim() && imageFiles.length === 0 && videoFiles.length === 0) return;

    const now = new Date();
    const dateStr = now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const newPost = {
      id: crypto.randomUUID(),
      date: dateStr,
      category: newCategory,
      title: title.trim() || "Untitled",
      excerpt: content.trim() || "(No content)",
      images: fileListToObjectUrls(imageFiles),
      videos: fileListToObjectUrls(videoFiles),
    };

    // ======== reset form ======== //
    setPosts((prev) => [newPost, ...prev]);
    setTitle("");
    setContent("");
    setNewCategory("Front End");
    setImageFiles([]);
    setVideoFiles([]);
  };

  // ========== Delete a post ========= //
  const deletePost = (id) => {
    if (!window.confirm("Delete this post?")) return;
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  //  ========== Delete a single media item from an existing post ========= //
  const deleteMediaFromPost = (postId, type, index) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== postId) return p;
        const key = type === "image" ? "images" : "videos";
        const updated = { ...p, [key]: p[key].filter((_, i) => i !== index) };
        return updated;
      })
    );
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900 transition-all duration-500">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-300 underline pt-10 "> My Blogs Page!</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">Create content, upload images/videos, and filter/search posts — design-only (in-memory).</p>
        </div>

        {/* Create Section */}
        <section data-aos="fade-up" className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 md:p-8 mb-10">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Create New Post</h3>
          <form onSubmit={handleCreate} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label>Title</Label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter blog title" />
              </div>

                {/* quick default options */}
              <div>
                <Label>Category</Label>
                <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Front End</option>
                  <option>Web Design</option>
                  <option>Development</option>
                  <option>Node.js</option>
                  <option>React</option>
                </select>
              </div>
            </div>

           {/* Content Section */}
            <div>
              <Label>Content</Label>
              <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your blog content here..." />
           </div>

            {/*multiple files */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label>Images (multiple)</Label>
                <Input type="file" multiple accept="image/*" onChange={(e) => setImageFiles(Array.from(e.target.files || []))} />
                {imageFiles.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {imageFiles.map((f, i) => (
                      <div key={i} className="relative w-24 h-24 rounded-lg overflow-hidden border">
                        <img src={URL.createObjectURL(f)} alt="preview" className="w-full h-full object-cover" />
                        <button type="button" onClick={() => removePreImage(i)} className="absolute top-1 right-1 text-xs px-2 py-1 bg-red-600 text-white rounded">
                        ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Video Upload Section */}
              <div>
                <Label>Videos (multiple)</Label>
                <Input type="file" multiple accept="video/*" onChange={(e) => setVideoFiles(Array.from(e.target.files || []))} />
                {videoFiles.length > 0 && (
                  <ul className="mt-3 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    {videoFiles.map((f, i) => (
                      <li key={i} className="flex items-center justify-between gap-3 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                        <span className="truncate">{f.name}</span>
                        <button type="button" onClick={() => removePreVideo(i)} className="text-red-600 hover:underline">Remove</button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/*Publish Section */}
            <div className="flex items-center gap-3">
              <Button type="submit">Publish</Button>
              <button type="button" onClick={() => {setTitle(""); setContent(""); setNewCategory("Front End"); setImageFiles([]); setVideoFiles([]);}} className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                Reset
              </button>
            </div>
          </form>
        </section>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-8">
          <div className="relative md:w-1/2">
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search blogs by title, text, date or category..." className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 material-icons select-none">search</span>
          </div>

          {/*map categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={
                  "px-3 py-2 rounded-xl border transition shadow-sm " +
                  (category === c
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white/70 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700")
                }>
                {c === "all" ? "All" : c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Results meta */}
        <div className="flex items-center justify-between mb-6 text-sm text-gray-600 dark:text-gray-400">
          <div>
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            {query && (
              <>
              {" "}for <Badge>"{query}"</Badge>
              </>
            )}
            {category !== "all" && (
              <>
                {" "}in <Badge>{category}</Badge>
              </>
            )}
          </div>
          {query || category !== "all" ? (
            <button
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
              className="text-xs px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
              Clear filters
            </button>
          ) : null}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">No results found</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Try a different keyword or clear filters.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <article
                key={p.id}
                data-aos="fade-up"
                data-aos-delay={i % 3 === 1 ? 150 : i % 3 === 2 ? 300 : 0}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden group transition hover:scale-[1.02]">
                {/* Media header */}
                {p.images?.[0] ? (
                  <img src={p.images[0]} alt={p.title} className="w-full h-52 object-cover" />
                ) : p.videos?.[0] ? (
                  <video src={p.videos[0]} className="w-full h-52 object-cover" controls />
                ) : (
                  <div className="w-full h-52 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">No media</div>
                )}

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{p.date}</span>
                    <span>•</span>
                    <Badge>{p.category}</Badge>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mt-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{p.excerpt}</p>

                  {/* Thumbnails + per-media delete (design only) */}
                  {(p.images?.length || p.videos?.length) ? (
                    <div className="mt-4 space-y-2">
                      {p.images?.length > 0 && (
                        <div>
                          <div className="text-xs font-medium mb-1 text-gray-500">Images</div>
                          <div className="flex flex-wrap gap-2">
                            {p.images.map((src, idx) => (
                              <div key={idx} className="relative">
                                <img src={src} alt="img" className="w-16 h-16 object-cover rounded" />
                                <button
                                  type="button"
                                  onClick={() => deleteMediaFromPost(p.id, "image", idx)}
                                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center"
                                  title="Delete image">
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {p.videos?.length > 0 && (
                        <div>
                          <div className="text-xs font-medium mb-1 text-gray-500">Videos</div>
                          <div className="flex flex-wrap gap-2 items-center">
                            {p.videos.map((src, idx) => (
                              <div key={idx} className="relative">
                                <video src={src} className="w-24 h-16 rounded" />
                                <button
                                  type="button"
                                  onClick={() => deleteMediaFromPost(p.id, "video", idx)}
                                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center"
                                  title="Delete video">
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : null}

                  {/* Delete Post Actions */}
                  <div className="mt-4 flex items-center justify-between">
                    <button onClick={() => deletePost(p.id)} className="px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">
                      Delete Post
                    </button>
                    <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Read More →</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 py-6 bg-gray-200 dark:bg-gray-800 text-center">
      <p className="text-gray-600 dark:text-gray-400">© 2025 Your Blog. All Rights Reserved.</p>
      </footer>
    </div>
  );
 };

 // =========== Blog Components end ========= // 
 export default BlogComponents;
