ARG APP
FROM $APP:dev

# Copy python package files into the image.
COPY ./pyproject.toml pyproject.toml
COPY ./poetry.lock poetry.lock

# Install python requirements.
RUN poetry export \
    --format=requirements.txt \
    --without-hashes \
    --output requirements.txt

RUN python -m pip install --upgrade pip && \
    pip install -r requirements.txt --target ./package

