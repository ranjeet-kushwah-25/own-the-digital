export const getContacts = async () => {
    try {
        const res = await fetch("/api/contact");
        const result = await res.json();
        return result;
    } catch (error) {
        return { success: false, message: "Failed to get contacts" };
    }
};

export const createContact = async (data) => {
    try {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        return result;
    } catch (error) {
        return { success: false, message: "Failed to create contact" };
    }
};

export const getContactById = async (id) => {
    try {
        const res = await fetch(`/api/contact/${id}`);
        const result = await res.json();
        return result;
    } catch (error) {
        return { success: false, message: "Failed to get contact" };
    }
};

export const deleteContact = async (id) => {
    try {
        const res = await fetch(`/api/contact/${id}`, {
            method: "DELETE",
        });

        const result = await res.json();
        return result;
    } catch (error) {
        return { success: false, message: "Failed to delete contact" };
    }
};

export const getContactStats = async () => {
    try {
        const res = await fetch("/api/contact/stats");
        const result = await res.json();
        return result;
    } catch (error) {
        return { success: false, message: "Failed to get contact stats" };
    }
};