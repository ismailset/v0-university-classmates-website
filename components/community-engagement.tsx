"use client"

import { useState } from "react"
import { Heart, MessageCircle, Share2, Send } from "lucide-react"

interface Comment {
  id: number
  author: string
  text: string
  timestamp: string
  likes: number
  liked: boolean
}

export default function CommunityEngagement() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Akash",
      text: "Great to see everyone connected! This is amazing!",
      timestamp: "2 hours ago",
      likes: 12,
      liked: false,
    },
    {
      id: 2,
      author: "Md Ismail",
      text: "Proud of what our batch has achieved. Let's stay connected!",
      timestamp: "5 hours ago",
      likes: 18,
      liked: false,
    },
    {
      id: 3,
      author: "Rajesh Kumar",
      text: "Looking forward to our batch reunion next year!",
      timestamp: "1 day ago",
      likes: 8,
      liked: false,
    },
  ])

  const [newComment, setNewComment] = useState("")
  const [authorName, setAuthorName] = useState("")

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: authorName,
        text: newComment,
        timestamp: "just now",
        likes: 0,
        liked: false,
      }
      setComments([comment, ...comments])
      setNewComment("")
      setAuthorName("")
    }
  }

  const handleLike = (id: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              liked: !comment.liked,
              likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
            }
          : comment,
      ),
    )
  }

  return (
    <section id="community" className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Community Wall</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Share memories, connect with classmates, and celebrate together!
          </p>
        </div>

        {/* Comment Input */}
        <div className="glass-dark rounded-2xl p-6 mb-8 border border-border/50">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <textarea
              placeholder="Share a memory, message, or thought with the batch..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none h-24"
            />
            <button
              onClick={handleAddComment}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-background font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 group"
            >
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              Post Comment
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="space-y-4">
          <p className="text-foreground/70 text-sm mb-6">{comments.length} messages from the batch</p>
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="glass-dark rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-foreground">{comment.author}</h4>
                  <p className="text-foreground/50 text-xs">{comment.timestamp}</p>
                </div>
              </div>
              <p className="text-foreground/80 mb-4">{comment.text}</p>
              <div className="flex gap-6 text-foreground/60 text-sm">
                <button
                  onClick={() => handleLike(comment.id)}
                  className={`flex items-center gap-2 transition-colors ${
                    comment.liked ? "text-accent" : "hover:text-accent"
                  }`}
                >
                  <Heart size={16} fill={comment.liked ? "currentColor" : "none"} />
                  {comment.likes}
                </button>
                <button className="flex items-center gap-2 hover:text-accent transition-colors">
                  <MessageCircle size={16} />
                  Reply
                </button>
                <button className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Share2 size={16} />
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
