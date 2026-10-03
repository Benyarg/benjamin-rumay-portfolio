type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  id: string;
  centered?: boolean;
};
export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  id,
  centered = false,
}: Props) {
  return (
    <div
      className={'section-heading reveal' + (centered ? ' section-heading-centered' : '')}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>
        {title}
        {accent && (
          <>
            {' '}
            <span className="text-accent">{accent}</span>
          </>
        )}
      </h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
