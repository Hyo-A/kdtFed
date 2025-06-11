# Youtube Product Architecture

# Before URL

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/edit-user -> Edit User
/delete-user -> Delete User

/watch-video -> Watch Video
/edit-video -> Edit Video
/delete-video -> Delete Video

# Aftre URL (RESTful API)

# Global Router

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users/edit -> Edit User
/users/delete -> Delete User

/videos/watch -> Watch Video
/videos/edit -> Edit Video
/videos/delete -> Delete Video
/videos/comment -> Comment on a video
/videos/comment/delete -> Delete a comment on a video

# Pivot (\*Upgrade) Router

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users/:id -> See User
/users/:id/edit -> Edit My Profile
/users/:id/delete -> Delete My Profile
/users/logout -> Logout

/videos/:id -> See Video
/videos/:id/edit -> Edit Video
/videos/:id/delete -> Delete Video
/videos/upload -> Upload Video
