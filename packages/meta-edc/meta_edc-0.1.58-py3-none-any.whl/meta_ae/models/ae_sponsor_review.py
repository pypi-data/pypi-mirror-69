from edc_model import models as edc_models

from ..model_mixins import AeReviewModelMixin


class AeSponsorReview(AeReviewModelMixin, edc_models.BaseUuidModel):
    class Meta:
        verbose_name = "AE Sponsor Review"
