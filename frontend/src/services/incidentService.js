import api from "./api";

const incidentService = {

    async getAllIncidents() {

        const response = await api.get("/api/incidents");

        return response.data;

    },

    async getIncidentById(id) {

        const response = await api.get(`/api/incidents/${id}`);

        return response.data;

    },

    async createIncident(data) {

        const response = await api.post("/api/incidents", data);

        return response.data;

    },

    async updateIncident(id, data) {

        const response = await api.put(`/api/incidents/${id}`, data);

        return response.data;

    },

    async deleteIncident(id) {

        const response = await api.delete(`/api/incidents/${id}`);

        return response.data;

    }

};

export default incidentService;