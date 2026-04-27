export const getBlogs = async (params = {}) => {
  try {
    const { page = 1, limit = 10, category } = params;
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(category && { category })
    });

    const res = await fetch(`/api/blogs?${queryParams}`);
    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Failed to get blogs" };
  }
};

export const createBlog = async (data) => {
  try {
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Failed to create blog" };
  }
};

export const getBlogById = async (id) => {
  try {
    const res = await fetch(`/api/blogs/${id}`);
    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Failed to get blog" };
  }
};

export const updateBlog = async (id, data) => {
  try {
    const res = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Failed to update blog" };
  }
};

export const deleteBlog = async (id) => {
  try {
    const res = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });

    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Failed to delete blog" };
  }
};

export const likeBlog = async (id) => {
  try {
    const res = await fetch(`/api/blogs/${id}/like`, {
      method: "POST",
    });

    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Failed to like blog" };
  }
};

export const getBlogLikes = async (id) => {
  try {
    const res = await fetch(`/api/blogs/${id}/like`);
    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Failed to get blog likes" };
  }
};

export const getBlogCategories = async () => {
  try {
    const res = await fetch("/api/blogs/categories");
    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Failed to get blog categories" };
  }
};

export const getRelatedBlogs = async (id) => {
  try {
    const res = await fetch(`/api/blogs/${id}/related`);
    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Failed to get related blogs" };
  }
};

export const getBlogsByCategory = async (category) => {
  try {
    const res = await fetch(`/api/blogs/category/${category}/all`);
    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Failed to get blogs by category" };
  }
};