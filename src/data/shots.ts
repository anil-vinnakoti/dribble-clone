export interface Shot {
  id: number;
  title: string;
  imageUrl: string;
  views: number;
  likes: number;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
}

export const mockShots: Shot[] = [
  {
    id: 1,
    title: "Modern Dashboard Design",
    imageUrl: "/cardImages/1.png",
    views: 12500,
    likes: 1250,
    user: {
      name: "Sarah Anderson",
      avatarUrl:
        "https://cdn.dribbble.com/users/5031392/avatars/normal/0f9e567f5caf3f8f9469c7b89a319bc6.png?1674226456",
      isPro: true
    }
  },
  {
    id: 2,
    title: "E-commerce Mobile App",
    imageUrl:
      "https://cdn.dribbble.com/userupload/13367774/file/original-7f4597862a1d8e3e54d9d6f240bd4726.png?resize=1504x1128",
    views: 9800,
    likes: 876,
    user: {
      name: "Mike Chen",
      avatarUrl:
        "https://cdn.dribbble.com/users/5031392/avatars/normal/0f9e567f5caf3f8f9469c7b89a319bc6.png?1674226456",
      isPro: false
    }
  },
  {
    id: 3,
    title: "Social Media Analytics",
    imageUrl:
      "https://cdn.dribbble.com/userupload/13367775/file/original-d5a3c9f7b1d8e3e54d9d6f240bd4726.png?resize=1504x1128",
    views: 15600,
    likes: 1890,
    user: {
      name: "Emma Davis",
      avatarUrl:
        "https://cdn.dribbble.com/users/5031392/avatars/normal/0f9e567f5caf3f8f9469c7b89a319bc6.png?1674226456",
      isPro: true
    }
  },
  {
    id: 4,
    title: "Fitness Tracking Interface",
    imageUrl:
      "https://cdn.dribbble.com/userupload/13367776/file/original-b2c3d9f7b1d8e3e54d9d6f240bd4726.png?resize=1504x1128",
    views: 8900,
    likes: 654,
    user: {
      name: "Alex Thompson",
      avatarUrl:
        "https://cdn.dribbble.com/users/5031392/avatars/normal/0f9e567f5caf3f8f9469c7b89a319bc6.png?1674226456",
      isPro: false
    }
  },
  {
    id: 5,
    title: "Weather App Design",
    imageUrl:
      "https://cdn.dribbble.com/userupload/13367777/file/original-e4f5d9f7b1d8e3e54d9d6f240bd4726.png?resize=1504x1128",
    views: 11200,
    likes: 987,
    user: {
      name: "Lisa Wang",
      avatarUrl:
        "https://cdn.dribbble.com/users/5031392/avatars/normal/0f9e567f5caf3f8f9469c7b89a319bc6.png?1674226456",
      isPro: true
    }
  },
  {
    id: 6,
    title: "Task Management Platform",
    imageUrl:
      "https://cdn.dribbble.com/userupload/13367778/file/original-h6g7d9f7b1d8e3e54d9d6f240bd4726.png?resize=1504x1128",
    views: 13400,
    likes: 1432,
    user: {
      name: "David Miller",
      avatarUrl:
        "https://cdn.dribbble.com/users/5031392/avatars/normal/0f9e567f5caf3f8f9469c7b89a319bc6.png?1674226456",
      isPro: true
    }
  },
  {
    id: 7,
    title: "Music Player Interface",
    imageUrl:
      "https://cdn.dribbble.com/userupload/13367779/file/original-i8j9d9f7b1d8e3e54d9d6f240bd4726.png?resize=1504x1128",
    views: 10800,
    likes: 876,
    user: {
      name: "Sophie Brown",
      avatarUrl:
        "https://cdn.dribbble.com/users/5031392/avatars/normal/0f9e567f5caf3f8f9469c7b89a319bc6.png?1674226456",
      isPro: false
    }
  },
  {
    id: 8,
    title: "Travel Booking App",
    imageUrl:
      "https://cdn.dribbble.com/userupload/13367780/file/original-k1l2d9f7b1d8e3e54d9d6f240bd4726.png?resize=1504x1128",
    views: 14500,
    likes: 1654,
    user: {
      name: "James Wilson",
      avatarUrl:
        "https://cdn.dribbble.com/users/5031392/avatars/normal/0f9e567f5caf3f8f9469c7b89a319bc6.png?1674226456",
      isPro: true
    }
  }
];
