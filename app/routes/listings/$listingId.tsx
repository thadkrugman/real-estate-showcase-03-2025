import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/listings/$listingId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/listings/$listingId"!</div>
}
